const activityNames = ['Douglas', 'Maycon', 'Gabriel', 'Lucas', 'Matheus', 'Rafael', 'Bruno', 'Felipe', 'Gustavo', 'Pedro', 'João', 'Thiago', 'Leonardo', 'André', 'Caio', 'Vinícius', 'Eduardo', 'Henrique', 'Diego', 'Rodrigo', 'Marcelo', 'Daniel', 'Samuel', 'Victor', 'Murilo', 'Renan', 'Alexandre', 'Wesley', 'Igor', 'Leandro', 'Carlos', 'Paulo', 'Marcos', 'Fernando', 'Ricardo', 'Anderson', 'Jefferson', 'Nathan', 'Otávio', 'Arthur', 'Davi', 'Miguel', 'Bernardo', 'Nicolas', 'Luan', 'Alan', 'Adriano', 'Robson', 'Júlio', 'Fábio', 'Vitor', 'Ana', 'Juliana', 'Camila', 'Amanda', 'Larissa', 'Beatriz', 'Mariana', 'Letícia', 'Isabela', 'Bianca', 'Vitória', 'Carolina', 'Fernanda', 'Bruna', 'Luana', 'Gabriela', 'Giovanna', 'Natália', 'Aline', 'Patrícia', 'Vanessa', 'Débora', 'Renata', 'Jéssica', 'Priscila', 'Raquel', 'Tatiane', 'Monique', 'Sabrina', 'Yasmin', 'Nicole', 'Evelyn', 'Michele', 'Cristiane', 'Elaine', 'Talita', 'Karen', 'Mayara', 'Rebeca'];
let activityIndex = 3;
function addActivity(){
  const feed=document.getElementById('activity-feed');
  if(!feed) return;
  const name=activityNames[activityIndex % activityNames.length];
  activityIndex++;
  const row=document.createElement('div');
  row.className='activity-row';
  row.innerHTML=`<i>${name.charAt(0)}</i><p><strong>${name}</strong> entrou no grupo</p><time>agora</time>`;
  feed.prepend(row);
  while(feed.children.length>4) feed.lastElementChild.remove();
}
setInterval(addActivity, 4200);
