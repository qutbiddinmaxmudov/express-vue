let server = [
  {id:1, name:'AWS', status:'working'},
  {id:2, name:'Google cloud', status:'working'},
  {id:3, name:'Yandex cloud', status:'working'},
  {id:4, name:'Microsoft', status:'working'}
]

export const deleteServer = (req,res)=>{
  console.log(req.params.id);
  server = server.filter(s => s.id != req.params.id)
  res.json({message: 'Server has been deleted.'})
}

export const getAll = (req,res)=>{
  res.status(200).json(server)
}

export const create = (req, res)=>{
  const newServer = {
    id: Date.now().toString(),
    ...req.body
  }
  server.push(newServer)
  res.status(201).json(newServer)
}