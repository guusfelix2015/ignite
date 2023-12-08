import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import {
  Overlay,
  Content,
  CloseButton,
  TransactionType,
  TransactionTypeButton,
} from './styles';
import z from "zod"
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const newTransactionFormSchema = z.object({
  discription: z.string(),
  price: z.number().positive(),
  category: z.string(),
  type: z.enum(["income", "outcome"])
})

type newTransactionFormInput = z.infer<typeof newTransactionFormSchema>



export function NewTransactionModal() {
  const { register, handleSubmit, control, formState: { isSubmitting } } = useForm<newTransactionFormInput>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: "income"
    }
  })

  function handleCreateNewTransaction(data: newTransactionFormInput) {
    console.log(data)
  }


  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input type='text' placeholder='Descrição' required {...register("discription")} />
          <input type='number' placeholder='Preço' required {...register("price", { valueAsNumber: true })} />
          <input type='text' placeholder='Categoria' required {...register("category")} />

          <Controller
            control={control}
            name='type'
            render={({ field }) => {
              return (
                <TransactionType onValueChange={field.onChange} value={field.value}>
                  <TransactionTypeButton value='income' variant='income'>
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton value='outcome' variant='outcome'>
                    <ArrowCircleDown size={24} />
                    Saida
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button disabled={isSubmitting} type='submit'>Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
