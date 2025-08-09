"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { FormInput } from "@/components/ui/form-input";
import { zonesService, CreateInterestResponse } from "@/services/zones";
import localities from "@/data/localities.json";

const FormSchema = z.object({
  email: z.string().email({ message: "Por favor, ingresá un email válido." }),
  locality: z.string().min(1, {
    message: "Por favor, seleccioná una localidad.",
  }),
});

export function LocationChecker() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{
    title: string;
    description: string;
    isAvailable: boolean;
  } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      locality: "",
    },
  });

  const {
    formState: { isValid },
  } = form;

  const filteredLocalities = useMemo(() => {
    if (searchQuery.length < 3) {
      return [];
    }
    return localities
      .filter((locality) =>
        locality.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0, 5);
  }, [searchQuery]);

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
          ? `¡Scrapy ya está operativo en ${zoneName}! Registrate y empezá a sumar puntos.`
          : `Aún no llegamos a ${zoneName}, ¡pero estamos cerca! Te avisaremos en cuanto estemos disponibles.`,
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <FormField
                control={form.control}
                name="locality"
                render={({ field }) => (
                  <FormItem className="flex flex-col h-full">
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            size="xl"
                            className={cn(
                              "w-full px-6 py-4 rounded-full border border-gray-200 placeholder-gray-400 text-gray-600 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none justify-between h-full text-left font-normal bg-white",
                              !field.value && "text-gray-400"
                            )}
                          >
                            {field.value
                              ? capitalize(field.value)
                              : "Seleccioná una localidad"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height] p-0">
                        <Command>
                          <CommandInput
                            placeholder="Buscá una localidad..."
                            onValueChange={setSearchQuery}
                          />
                          <CommandList>
                            {filteredLocalities.length === 0 &&
                              searchQuery.length >= 3 && (
                                <CommandEmpty>
                                  No se encontró la localidad.
                                </CommandEmpty>
                              )}
                            <CommandGroup>
                              {filteredLocalities.map((locality) => (
                                <CommandItem
                                  value={locality}
                                  key={locality}
                                  onSelect={() => {
                                    form.setValue("locality", locality, {
                                      shouldValidate: true,
                                    });
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      locality === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {capitalize(locality)}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="h-full">
                    <FormControl>
                      <FormInput
                        placeholder="tuemail@ejemplo.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button
            type="submit"
            variant="primary"
            size="xl"
            className="w-full"
            disabled={!isValid || createInterestMutation.isPending}
          >
            <span
              className={
                createInterestMutation.isPending ? "opacity-0" : "opacity-100"
              }
            >
              Verificar →
            </span>
            {createInterestMutation.isPending && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </Button>
        </form>
      </Form>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{modalContent?.title}</DialogTitle>
          </DialogHeader>
          <DialogDescription>{modalContent?.description}</DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}

function capitalize(sentence: string) {
  return sentence
    .split(" ")
    .map((word) => {
      // Handle words with punctuation or special characters
      if (word.length === 0) return word;
      
      // Find the first letter (skip leading punctuation)
      let firstLetterIndex = 0;
      while (firstLetterIndex < word.length && !/[a-zA-Z]/.test(word[firstLetterIndex])) {
        firstLetterIndex++;
      }
      
      if (firstLetterIndex >= word.length) return word; // No letters found
      
      // Capitalize the first letter and lowercase the rest
      return (
        word.slice(0, firstLetterIndex) + 
        word[firstLetterIndex].toUpperCase() + 
        word.slice(firstLetterIndex + 1).toLowerCase()
      );
    })
    .join(" ");
}
