<template>
    <div>
        <h2>Habilidades</h2>

        <blockquote>
            <p>Será que sabe mesmo?</p>
            <footer>Meu conhecimento é dividido entre os seguintes setores:</footer>
        </blockquote>

        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="progress" data-v-step="0">
                    <div class="progress-bar progress-bar-default progress-bar-striped active" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                        Gestão
                    </div>
                </div>
                <div class="progress" data-v-step="1">
                    <div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                        PHP / MySql / HTML / CSS
                    </div>
                </div>
                <div class="progress" data-v-step="2">
                    <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 10%">
                        Laravel / Vue / CodeIgniter
                    </div>
                </div>
                <div class="progress" data-v-step="3">
                    <div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 10%">
                        Js / JQuery
                    </div>
                </div>
                <div class="progress" data-v-step="4">
                    <div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                        Corel Drawn / Photoshop / Illustrator
                    </div>
                </div>
            </div>
            <v-tour name="myTour" :steps="steps"></v-tour>
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
                        content: `Gerir pessoas e processos é dividir responsabilidade e ponderar tarefas`
                    },
                    {
                        target: '[data-v-step="1"]',
                        content: `Conhecimento na área de programação em Front End e Back End`
                    },
                    {
                        target: '[data-v-step="2"]',
                        content: 'Fazendo cursos online para aumentar o conhecimento na área de Laravel e Vue'
                    },
                    {
                        target: '[data-v-step="3"]',
                        content: 'Próximo curso a ser tomado como prioridade'
                    },
                    {
                        target: '[data-v-step="4"]',
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