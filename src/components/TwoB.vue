<template>
    <div>
        <h2>Habilidades <small><router-link to="/page-two" class="nav-link pull-right" active-class="active" style="cursor: pointer"><i class="fas fa-chevron-circle-left"></i> Voltar</router-link></small></h2>
        <div class="well well-lg">
            <div class="progress" data-v-step="0">
                <div class="progress-bar progress-bar-default progress-bar-striped active" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                    Gestão
                </div>
                <div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                    PHP / MySql / HTML / CSS
                </div>
                <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 10%">
                    Laravel / Vue / CodeIgniter
                </div>
                <div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 10%">
                    Js / JQuery
                </div>
                <div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                    Corel Drawn / Photoshop / Illustrator
                </div>
            </div>
            <div class="media">
                <div class="media-middle">
                    <div class="progress" data-v-step="1">
                        <div class="progress-bar progress-bar-default progress-bar-striped active" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                            Gestão
                        </div>
                    </div>
                    <div class="progress" data-v-step="2">
                        <div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                            PHP / MySql / HTML / CSS
                        </div>
                    </div>
                    <div class="progress" data-v-step="3">
                        <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 10%">
                            Laravel / Vue / CodeIgniter
                        </div>
                    </div>
                    <div class="progress" data-v-step="4">
                        <div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 10%">
                            Js / JQuery
                        </div>
                    </div>
                    <div class="progress" data-v-step="5">
                        <div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                            Corel Drawn / Photoshop / Illustrator
                        </div>
                    </div>
                    <v-tour name="myTour" :steps="steps"></v-tour>                    
                </div>
            </div>
        </div>

        <blockquote>
            <p><i class="far fa-question-circle"></i> Será que sabe mesmo?</p>
            <footer>Meu conhecimento é dividido entre os seguintes setores:</footer>
        </blockquote>
        <div class="well well-lg">
            <div class="media">
                <ul>
                    <li><strong>Curso técnico de Programação de Computadores pela FIEC/CEPIN.</strong></li>
                    <li><strong>Curso técnico de Web Design pela PEOPLE.</strong></li>
                    <li><strong>Curso de Liderança pela Phoenix Empresarial.</strong></li>
                    <li><strong>Faculdade em Marketing.</strong></li>
                    <li><strong>Faculdade em Sistemas para Web</strong></li>
                    <li><strong>MBA Gestão de Projetos</strong></li>
                    <li><em>Criei e desenvolvi uma equipe WEB em uma agência, atualmente sou treinador de um time de Futebol Americano, gosto de incentivar e desenvolver pessoas.</em></li>
                    <li><em>Procuro excelência no que faço, busco detalhes, gosto de inovar, não gosto de 'achismos', gosto de dados, fatos, informações com base.</em></li>
                    <li><em>Procuro sempre o melhor para o cliente, não procuro fazer como o concorrente que está com visibilidade, procuro fazer algo melhor.</em></li>
                </ul>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        name: 'my-tour',
        data () {
            return {
                //variáveis do tour
                steps: [
                    {
                        target: '[data-v-step="0"]',
                        content: `100% do que sou e dos meus conhecimentos`
                    },
                    {
                        target: '[data-v-step="1"]',
                        content: `Gerir pessoas e processos é dividir responsabilidade e ponderar tarefas`
                    },
                    {
                        target: '[data-v-step="2"]',
                        content: `Conhecimento na área de programação em Front End e Back End`
                    },
                    {
                        target: '[data-v-step="3"]',
                        content: 'Fazendo cursos online para aumentar o conhecimento na área de Laravel e Vue'
                    },
                    {
                        target: '[data-v-step="4"]',
                        content: 'Próximo curso a ser tomado como prioridade'
                    },
                    {
                        target: '[data-v-step="5"]',
                        content: 'Um diferencial na área para facilitar ou agilizar alguns processos',
                        params: {
                            placement: 'top'
                        }
                    }
                ]
            }
        },
        mounted: function () {
            this.$tours['myTour'].start()
        }
    }
</script>