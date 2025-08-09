"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Control } from "react-hook-form";
import { z } from "zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useState, useMemo } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { FormInput } from "@/components/ui/form-input";
import { zonesService, CreateInterestResponse } from "@/services/zones";
import localities from "@/data/localities.json";

// Shared Logic & Schema
const FormSchema = z.object({
  email: z.string().email({ message: "Por favor, ingresá un email válido." }),
  locality: z.string().min(1, { message: "Por favor, seleccioná una localidad." }),
});
type FormValues = z.infer<typeof FormSchema>;

function capitalize(sentence: string) {
  return sentence
    .split(" ")
    .map((word) => {
      if (word.length === 0) return word;
      let firstLetterIndex = 0;
      while (firstLetterIndex < word.length && !/[a-zA-Z]/.test(word[firstLetterIndex])) {
        firstLetterIndex++;
      }
      if (firstLetterIndex >= word.length) return word;
      return (
        word.slice(0, firstLetterIndex) +
        word[firstLetterIndex].toUpperCase() +
        word.slice(firstLetterIndex + 1).toLowerCase()
      );
    })
    .join(" ");
}

// Subcomponents
const LocalityButton = ({ value }: { value: string }) => (
  <Button variant="outline" role="combobox" size="xl" className={cn("w-full px-6 py-4 rounded-full border border-gray-200 placeholder-gray-400 text-gray-600 text-base focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none justify-between h-full text-left font-normal bg-white", !value && "text-gray-400")}>
    {value ? capitalize(value) : "Seleccioná una localidad"}
    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
  </Button>
);

const LocalityCommand = ({ localities, onSearchChange, onSelect, currentValue }: { localities: string[]; onSearchChange: (search: string) => void; onSelect: (locality: string) => void; currentValue: string; }) => (
  <Command>
    <CommandInput placeholder="Buscá una localidad..." onValueChange={onSearchChange} />
    <CommandList>
      {localities.length === 0 && <CommandEmpty>No se encontró la localidad.</CommandEmpty>}
      <CommandGroup>
        {localities.map((locality) => (
          <CommandItem value={locality} key={locality} onSelect={() => onSelect(locality)}>
            <Check className={cn("mr-2 h-4 w-4", locality === currentValue ? "opacity-100" : "opacity-0")} />
            {capitalize(locality)}
          </CommandItem>
        ))}
      </CommandGroup>
    </CommandList>
  </Command>
);

const LocalityField = ({ control, localities, onSearchChange, onSelect, isOpen, onOpenChange }: { control: Control<FormValues>; localities: string[]; onSearchChange: (search: string) => void; onSelect: (locality: string) => void; isOpen: boolean; onOpenChange: (isOpen: boolean) => void; }) => (
  <FormField
    control={control}
    name="locality"
    render={({ field }) => (
      <FormItem className="flex flex-col h-full">
        <Popover open={isOpen} onOpenChange={onOpenChange}>
          <PopoverTrigger asChild>
            <FormControl><LocalityButton value={field.value} /></FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height] p-0">
            <LocalityCommand localities={localities} onSearchChange={onSearchChange} onSelect={onSelect} currentValue={field.value} />
          </PopoverContent>
        </Popover>
      </FormItem>
    )}
  />
);

const emailInputClasses = "w-full h-14 px-6 py-4 rounded-full border border-gray-200 bg-white placeholder-gray-400 text-gray-600 text-base md:text-base font-normal outline-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-0 ring-offset-0";

const EmailField = ({ control }: { control: Control<FormValues> }) => (
  <FormField
    control={control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormControl>
          <FormInput className={emailInputClasses} placeholder="tuemail@ejemplo.com" {...field} />
        </FormControl>
      </FormItem>
    )}
  />
);

const SubmitButton = ({ isPending, isValid }: { isPending: boolean; isValid: boolean }) => (
  <Button type="submit" variant="primary" size="xl" className="w-full" disabled={!isValid || isPending}>
    <span className={cn(isPending ? "opacity-0" : "opacity-100")}>Verificar →</span>
    {isPending && <div className="absolute inset-0 flex items-center justify-center"><div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div></div>}
  </Button>
);

const GroupErrorMessage = ({ message }: { message?: string }) => {
  if (!message) return null;
  return <p className="text-sm font-medium text-red-500 pl-1">{message}</p>;
};

const AvailabilityDialog = ({ open, onOpenChange, content }: { open: boolean; onOpenChange: (open: boolean) => void; content: { title: string; description: string; isAvailable: boolean } | null; }) => {
  const isAvailable = content?.isAvailable;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-lg p-0 overflow-hidden border-0 shadow-xl">
        <div className="p-6"><DialogHeader className="space-y-3">
            <DialogTitle className="text-2xl font-bold tracking-tight text-gray-800">{content?.title}</DialogTitle>
            <DialogDescription className="text-base text-gray-500">{content?.description}</DialogDescription>
        </DialogHeader></div>
        <div className={cn("h-2 w-full", isAvailable ? "bg-green-500" : "bg-gray-300")} />
      </DialogContent>
    </Dialog>
  );
};

// Main Component
export function LocationChecker() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; description: string; isAvailable: boolean; } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLocalityOpen, setIsLocalityOpen] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: { email: "", locality: "" },
  });

  const { formState: { isValid, errors } } = form;
  const groupErrorMessage = (errors.locality?.message as string | undefined) || (errors.email?.message as string | undefined);

  const filteredLocalities = useMemo(() => {
    if (searchQuery.length < 3) return [];
    return localities.filter((locality) => locality.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5);
  }, [searchQuery]);

  const createInterestMutation = useMutation<CreateInterestResponse, Error, { zoneName: string; email: string }>({
    mutationFn: (data) => zonesService.createInterest(data),
    onSuccess: (response) => {
      const { available, zoneName } = response;
      setModalContent({
        title: available ? "¡Excelente!" : "¡Estamos cada vez más cerca!",
        description: available ? `¡Scrapy ya está operativo en ${capitalize(zoneName)}! Registrate y empezá a sumar puntos.` : `Aún no llegamos a ${capitalize(zoneName)}, ¡pero estamos cerca! Te avisaremos en cuanto estemos disponibles.`,
        isAvailable: available,
      });
      setIsModalOpen(true);
    },
    onError: () => {
      setModalContent({ title: "Error", description: "Hubo un problema al verificar la localidad. Por favor, intentá de nuevo más tarde.", isAvailable: false });
      setIsModalOpen(true);
    },
  });

  function onSubmit(data: FormValues) {
    createInterestMutation.mutate({ email: data.email, zoneName: data.locality });
  }

  function onLocalitySelect(locality: string) {
    form.setValue("locality", locality, { shouldValidate: true });
    setIsLocalityOpen(false);
    setSearchQuery("");
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <LocalityField control={form.control} localities={filteredLocalities} onSearchChange={setSearchQuery} onSelect={onLocalitySelect} isOpen={isLocalityOpen} onOpenChange={setIsLocalityOpen} />
            </div>
            <div className="flex-1">
              <EmailField control={form.control} />
            </div>
          </div>
          <GroupErrorMessage message={groupErrorMessage} />
          <SubmitButton isPending={createInterestMutation.isPending} isValid={isValid} />
        </form>
      </Form>
      <AvailabilityDialog open={isModalOpen} onOpenChange={setIsModalOpen} content={modalContent} />
    </>
  );
}
