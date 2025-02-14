# api-cadastrofuncionario
Vai ser um api montada para trabalha com validação de acessos, exemplo acesso de Caixa, Admin, etc...

Vamos trabalhar com o banco Mysql e vamos usar Typescript!

Criar o Banco cadastro_de_funcionari!

criar a tabela people, onde vamos ter:
name: string,
surname: string,
number_phone: number,
cpf: string,
rg, string,
uf: string
zipcode: number,
address: string,
house_number: number,
commercial_relationship: string


Para o ele ser usaurio tem que ser cadastrado  como pesoa antes!

criar a tabela usuarios, onde vamos ter:
name: string,
user: string,
email: string,
password: string
active_store: array,
user_access: array

Essa api vai se comunicar com um front-end em React que vou criar, com o nome de repositorio, front-cadastrofuncionario!
