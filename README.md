# Vetera Challenge

Esse projeto foi feito para o processo seletivo da vetera. Que esse processo consistia em:
- Desenvolver o Font End (Angular) e Back End (.NET Core), usando a API da Marvel.
- No front end,Tem um formulario, para digitar o nome do super heroi (em ingles) e um botão para enviar.
- Caso o input esteja vazio, aparece um Toast Warning pedindo para vc preencher o campo.
- Quando o usuario clicar no botão enviar faç uma requisição para o meu backend.
- Para o usuario não fazer mais requisições coloquei um Loading na tela para evitar esse problema.
- Caso a requisição for um sucesso, ele me retorna o personagem que vc digitou (Foto, nome e descrição) e também a lista de eventos daquele personagem (Foto, titulo e descrição).
- Caso a requisição for um BadRequest retorno um Toast Error.
