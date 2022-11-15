import { useEffect, useState } from "react"
import "./App.css"
import BasicModal from "./components/basicModal"
import Button from "./components/button"
import Card from "./components/card"
import Form from "./components/form"
import InputText from "./components/inputText"
import { feacher } from "./services/service"

function App() {
  const initialValue = JSON.parse(localStorage.getItem("cep")) || []
  const [data, setData] = useState(initialValue)
  const [open, setOpen] = useState(false)
  const [edit, setEdit] = useState({})
  const [valueInput, setValueInput] = useState("")

  useEffect(() => {
    data ? localStorage.setItem("cep", JSON.stringify(data)) : []
  }, [data])

  function onModalOpen() {
    setOpen(true)
  }

  function onModalClose() {
    setOpen(false)
  }

  async function onSearch() {
    const res = await feacher(valueInput)
    setData(prev => [...prev, res] || [])
  }

  function onChange(e) {
    setValueInput(e.target.value.replace(/\D/g, "").trim())
  }

  function onDelete(e) {
    const removedItem = data.filter(item => item.cep !== e.target.name)
    setData(removedItem)
  }

  function onEdit({ target }) {
    onModalOpen()
    const filteredCEP = data.find(item => item.cep === target.name)
    setEdit(filteredCEP)
  }

  function onChangeEdit({ target }) {
    const newData = { [target.name]: target.value }
    setEdit(prev => ({ ...prev, ...newData }))
  }

  function onConfirmedEdit() {
    const newState = data.map(obj => {
      if (obj.cep === edit.cep) {
        return { ...obj, ...edit }
      }
      return obj
    })

    setData(newState)
    onModalClose()
  }

  return (
    <div className="container mx-auto">
      <Form>
        <InputText handleChange={onChange} value={valueInput}>
          <Button handleClick={onSearch} />
        </InputText>
      </Form>
      <div className="mt-5">
        {data &&
          data.map((infos, index) => (
            <Card key={index} data={infos} handleDelete={onDelete} handleEdit={onEdit} />
          ))}
      </div>
      {open && (
        <BasicModal
          stateModal={open}
          handleClose={onModalClose}
          dataEdit={edit}
          handleConfirmed={onConfirmedEdit}
          handleChangeEdit={onChangeEdit}
        />
      )}
    </div>
  )
}

export default App
