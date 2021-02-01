<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

    export default {
        extends: Line,
        mixins: [reactiveProp],
        props: ['chartData'],
        data() {
            return {
                optionsData: { //Chart.js options
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            },
                            gridLines: {
                                display: true
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }]
                    },
                    legend: {
                        display: true,
                        labels: {
                            fontColor: 'yellow',
                            fontSize: 20
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        },
        mounted() {
            this.renderChart(this.chartData, this.optionsData)
        }

    }
</script>