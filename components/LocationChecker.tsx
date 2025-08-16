"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useState, useMemo } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ContactInput } from "@/components/ContactInput";
import { zonesService, CreateInterestResponse } from "@/services/zones";
import localities from "@/data/localities.json";

const FormSchema = z.object({
  email: z.string().email({ message: "Por favor, ingresá un email válido." }),
  locality: z.string().min(1, {
    message: "Por favor, seleccioná una localidad.",
  }),
});

type LocalitySelectProps = {
  field: any;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

function LocalitySelect({ field, searchQuery, setSearchQuery, isOpen, setIsOpen }: LocalitySelectProps) {
  const filteredLocalities = useMemo(() => {
    if (searchQuery.length < 3) return [];
    return localities
      .filter((locality) => locality.toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(0, 5);
  }, [searchQuery]);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <LocalityTrigger field={field} />
      <LocalityContent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filteredLocalities={filteredLocalities}
        field={field}
        setIsOpen={setIsOpen}
      />
    </Popover>
  );
}

function LocalityTrigger({ field }: { field: any }) {
  return (
    <PopoverTrigger asChild>
      <FormControl>
        <Button
          variant="outline"
          role="combobox"
          size="xl"
          className={cn(
            "w-full px-6 py-4 rounded-full border border-gray-200 placeholder-gray-400 text-gray-600 text-base focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none justify-between h-full text-left font-normal bg-white",
            !field.value && "text-gray-400"
          )}
        >
          {field.value ? capitalize(field.value) : "Seleccioná una localidad"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </FormControl>
    </PopoverTrigger>
  );
}

type LocalityContentProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  filteredLocalities: string[];
  field: any;
  setIsOpen: (value: boolean) => void;
}

function LocalityContent({ searchQuery, setSearchQuery, filteredLocalities, field, setIsOpen }: LocalityContentProps) {
  return (
    <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height] p-0">
      <Command>
        <CommandInput placeholder="Buscá una localidad..." onValueChange={setSearchQuery} />
        <LocalityList
          searchQuery={searchQuery}
          filteredLocalities={filteredLocalities}
          field={field}
          setIsOpen={setIsOpen}
        />
      </Command>
    </PopoverContent>
  );
}

type LocalityListProps = {
  searchQuery: string;
  filteredLocalities: string[];
  field: any;
  setIsOpen: (value: boolean) => void;
}

function LocalityList({ searchQuery, filteredLocalities, field, setIsOpen }: LocalityListProps) {
  return (
    <CommandList>
      {filteredLocalities.length === 0 && searchQuery.length >= 3 && (
        <CommandEmpty>No se encontró la localidad.</CommandEmpty>
      )}
      <CommandGroup>
        {filteredLocalities.map((locality) => (
          <LocalityItem
            key={locality}
            locality={locality}
            field={field}
            setIsOpen={setIsOpen}
          />
        ))}
      </CommandGroup>
    </CommandList>
  );
}

type LocalityItemProps = {
  locality: string;
  field: any;
  setIsOpen: (value: boolean) => void;
}

function LocalityItem({ locality, field, setIsOpen }: LocalityItemProps) {
  const form = useFormContext();
  return (
    <CommandItem
      value={locality}
      onSelect={() => {
        form.setValue("locality", locality, { shouldValidate: true });
        setIsOpen(false);
      }}
    >
      <Check className={cn("mr-2 h-4 w-4", locality === field.value ? "opacity-100" : "opacity-0")} />
      {capitalize(locality)}
    </CommandItem>
  );
}

function EmailInput({ field }: { field: any }) {
  return (
    <FormControl>
      <ContactInput
        type="email"
        label="Email"
        value={field.value}
        onChange={field.onChange}
        required
      />
    </FormControl>
  );
}

function SubmitButton({ isPending }: { isPending: boolean }) {
  const form = useFormContext();
  const isValid = form.formState.isValid;
  
  return (
    <Button type="submit" variant="primary" size="xl" className="w-full" disabled={!isValid || isPending}>
      <span className={isPending ? "opacity-0" : "opacity-100"}>Verificar →</span>
      {isPending && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </Button>
  );
}

type AvailabilityDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  content: { title: string; description: string; isAvailable: boolean } | null;
}

function StoreButtons() {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
      <a 
        href="https://apps.apple.com/ar/app/scrapy-reciclaje-de-materiales/id6467031017" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-32 mx-auto sm:mx-0 transition-transform duration-300 hover:-translate-y-1"
      >
        <img src="/images/appstore.svg" alt="Descargar en App Store" className="w-full h-auto" />
      </a>
      <a 
        href="https://play.google.com/store/apps/details?id=scrapy.app" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-32 mx-auto sm:mx-0 transition-transform duration-300 hover:-translate-y-1"
      >
        <img src="/images/google-play.svg" alt="Descargar Scrapy en Google Play" className="w-full h-auto" />
      </a>
    </div>
  );
}

function AvailabilityDialog({ open, onOpenChange, content }: AvailabilityDialogProps) {
  const isAvailable = content?.isAvailable;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md w-[calc(100%-2rem)] rounded-lg overflow-hidden border-0 shadow-xl mx-auto">
        <div className="p-4 sm:p-6">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight text-gray-800">
              {content?.title}
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-gray-500">
              {content?.description}
            </DialogDescription>
          </DialogHeader>
          {isAvailable && <StoreButtons />}
        </div>
        <div className={cn("h-2 w-full", isAvailable ? "bg-green-500" : "bg-gray-300")} />
      </DialogContent>
    </Dialog>
  );
}

export function LocationChecker() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    description: string;
    isAvailable: boolean;
  } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLocalityOpen, setIsLocalityOpen] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      locality: "",
    },
  });

  const {
    formState: { isValid, errors },
  } = form;

  const groupErrorMessage =
    (errors.locality?.message as string | undefined) ||
    (errors.email?.message as string | undefined) ||
    undefined;

  const createInterestMutation = useMutation<
    CreateInterestResponse,
    Error,
    { zoneName: string; email: string }
  >({
    mutationFn: (data) => zonesService.createInterest(data),
    onSuccess: (response) => {
      const { available, zoneName } = response;
      setModalContent({
        title: available ? "¡Excelente!" : "¡Estamos cada vez más cerca!",
        description: available
          ? `¡Scrapy ya está operativo en ${capitalize(zoneName)}! Registrate y empezá a sumar puntos.`
          : `Aún no llegamos a ${capitalize(zoneName)}, ¡pero estamos cerca! Te avisaremos en cuanto estemos disponibles.`,
        isAvailable: available,
      });
      setIsModalOpen(true);
    },
    onError: () => {
      setModalContent({
        title: "Error",
        description:
          "Hubo un problema al verificar la localidad. Por favor, intentá de nuevo más tarde.",
        isAvailable: false,
      });
      setIsModalOpen(true);
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    createInterestMutation.mutate({
      email: data.email,
      zoneName: data.locality,
    });
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <FormField
                control={form.control}
                name="locality"
                render={({ field }) => (
                  <FormItem className="flex flex-col h-full">
                    <LocalitySelect
                      field={field}
                      searchQuery={searchQuery}
                      setSearchQuery={setSearchQuery}
                      isOpen={isLocalityOpen}
                      setIsOpen={setIsLocalityOpen}
                    />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <EmailInput field={field} />
                  </FormItem>
                )}
              />
            </div>
          </div>
          {groupErrorMessage && (
            <p className="text-sm font-medium text-red-500 pl-1">
              {groupErrorMessage}
            </p>
          )}
          <SubmitButton isPending={createInterestMutation.isPending} />
        </form>
      </Form>
      <AvailabilityDialog
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        content={modalContent}
      />
    </>
  );
}

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