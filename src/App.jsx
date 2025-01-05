import { PencilSimple, Trash }  from "@phosphor-icons/react"
import Modal from "./components/Modal"
import { useState } from "react"
import axios from "axios"
function App() {
const [open, setOpen] = useState(false)

async function buscarUsuarios(){
  const usuarios = await axios.get('http://localhost:3000/users')
  console.log(usuarios.data)
}

buscarUsuarios()

  return (
   <main>
    <header className="flex justify-between p-6 m-4 rounded-lg bg-[#435e7D] items-center">
      <h1 className="text-4xl text-white">Usuários</h1>
      <button className="bg-green-600 p-2 rounded-md text-white px-6" onClick={() => setOpen(true)}>Novo usuário</button>
    </header>
    <table className="w-full text-center">
      <thead className="bg-gray-300">
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Breno</td>
          <td>Breno@.com</td>
          <td>(85) 8888-8888 </td>
          <td>
            <div>
              <button><PencilSimple size={32} color="#ff4000" weight="fill" /></button>
              <button><Trash size={32} color="#d33131" weight="fill" /></button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Modal open={open} setOpen={setOpen}/>
   </main>
  )
}

export default App
