<template>
    <div>
        <h2>Quem sou Eu?</h2>
        <div class="well well-lg">
            <div class="media">
                <div class="media-left media-middle">
                    <a href="#">
                        <picture>
                            <img :src="img.url" :alt="img.alt" :title="img.alt" class="img-rounded" width="64" height="auto">
                        </picture>
                    </a>
                </div>
                <div class="media-body">
                    <h3 class="media-heading">Bruno Depieri Barduchi, 32 anos, Casado</h3>
                    <p>Mais conhecido como Coió, apelido carinhoso adquirido na 8ª Série.<br />
                    Formado em Marketing, Sistemas para web e MBA em Gestão de Projetos procuro por novos desafios.<br /></p>
                </div>
                <div class="">
                    <ul>
                        <li>Trabalhei em agências na cidade de Indaiatuba, fui gerente de uma equipe, mas sempre buscando novos desafios, entrei de cabeça em uma empresa em Campinas que desenvolvia vido conferências, desenvolvi plataformas de streaming e on-demand.</li>
                        <li>Procurei novas perspectivas, comecei então na área de design, a faculdade que me formei me apresentou uma proposta na época irrecusável, desenvolver peças visuais e digitais, desenvolvimento em Marketing, mas como tudo que é bom dura pouco, retornei a área de desenvolvimento.</li>
                        <li>Não satisfeito e apaixonado por esportes, iniciei na área do Futebol Americano, mas em uma modalidade específica, Flag Football, já fui jogador, capitão da defesa, coordenador, auxiliar técnico e hoje tenho a honra de ser o HC (Head Coach) e Vice Presidente do Indaiatuba Alpacas Flag Football.</li>
                        <li>Atualmente prestando serviços Autônomo, mantenho minha vida entre altos e baixos.</li>
                        <li>Nas horas vagas gosto de jogos de computador, música, churrasco e Família.</li>
                    </ul>
                </div>
            </div>
        </div>

        <blockquote>
            <p>Aprender Sempre!</p>
            <footer>Não importa o quanto acho que sei, a única certeza é que tenho muito a aprender ainda.</footer>
        </blockquote>
    </div>
</template>
 
<script>
    export default {
        data(){
            return{
            //declarar envio da variável
            nome: null,
            //variáveis de entrada
            title:'Entre com seu nome.',
                img:{
                    url:'/src/assets/bruno.jpg',
                    alt:'Bruno Depieri Barduchi'
                }
            }
        }
    }
</script>