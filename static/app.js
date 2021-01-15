const App = {
  data() {
    return {
      servers:[],
      name: ''
    }
  },
  methods:{
    async deleteServer(id){
      const message = await fetch(`api/server/${id}`,{
        method:'DELETE'
      })
      this.servers = this.servers.filter(s => s.id !== id)
      console.log(await message.json())
    },
    async createServer(){
      const data = {
        name: this.name,
        status: 'Created'
      }
      const res = await fetch('/api/server',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
      })
      const newServer = await res.json()
      this.name = ''
      this.servers.push(newServer)
    }
  },
  async mounted(){
    const res = await fetch('/api/server')
    this.servers = await res.json()
  }
}

Vue.createApp(App).mount('#app')