export const barOptions = {
  plugins: {
      legend: {
          labels: {
              color: '#000'
          }
      }
  },
  scales: {
      x: {
          ticks: {
              color: '#000'
          },
          grid: {
              color: 'rgba(255,255,255,0.2)'
          }
      },
      y: {
          ticks: {
              color: '#000'
          },
          grid: {
              color: 'rgba(255,255,255,0.2)'
          }
      }
  }
};

export const radarOptions = {
  plugins: {
      legend: {
          labels: {
              color: '#495057'
          }
      }
  },
  scales: {
      r: {
          pointLabels: {
              color: '#495057',
          },
          grid: {
              color: '#ebedef',
          },
          angleLines: {
              color: '#ebedef'
          },
          ticks: {
            stepSize: 20,
          }
      }
  }
};
