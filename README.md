_Banco do supabase deletado. Credenciais em supabase.ts são inuteis_

Coisas a se fazer
[x] Validação / transformação
[x] Field Arrays
[x] Upload de arquivos
[] Composition Pattern

Validação & transformação feitas em Zod.

Field Array:
Formulários que é possível incluir mais informações de um campo.
Ex: Cadastro de um módulo de aulas.
Cada módulo tinha várias aulas, só que não um número certo.
Podia ser 5 aulas, 10 aulas, 15 aulas...
O usuário consegue adicionar quantas aulas quiser (adicionar ou remover mais desses campos)

Upload de arquivos:
Parte do avatar, upload num storage do supabase.

Composition Pattern:
Separação de componentes
Ex: <Field.Input>
<Field.Label>
<Field.Button>
