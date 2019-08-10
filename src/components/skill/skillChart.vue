<script>
import {PolarArea} from 'vue-chartjs'
import skillData from './skillData.js'

export default {
  extends: PolarArea,
  data () {
    return {
      datacollection: {
        labels: skillData.labels,
        datasets: [
          {
            backgroundColor: [
              'rgba(255, 153, 0, 0.5)',
              'rgba(0, 153, 255, 0.5)',
              'rgba(51, 204, 51, 0.5)'
            ], 
            data: skillData.data
          }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, 
      {
        responsive: true, 
        maintainAspectRatio: false,
        defaultFontColor: 'white',
        legend: {
          labels: {
            fontColor: '#ffffff'
          }
        },
        scale: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItems, data) {  
              return data.labels[tooltipItems.index];
            }
          }
        }
      })
  },
}
</script>