import { useEffect, useState } from "react"
import "./App.css"
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore"
import BasicModal from "./components/basicModal"
import Button from "./components/button"
import Card from "./components/card"
import Form from "./components/form"
import InputText from "./components/inputText"
import { feacher } from "./services/service"
import { db } from "./firebase/configs"

function App() {
  const cepCollectionRef = collection(db, "cep")
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const [edit, setEdit] = useState({})
  const [valueInput, setValueInput] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getCEPs() {
      const results = await getDocs(cepCollectionRef)
      setData(results.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    getCEPs()
  }, [data])

  function onModalOpen() {
    setOpen(true)
  }

  function onModalClose() {
    setOpen(false)
  }

  async function onSearch() {
    try {
      const cepObj = await feacher(valueInput)
      setData(prev => [cepObj, ...prev])
      await addDoc(cepCollectionRef, cepObj)
      setLoading(true)
    } catch (e) {
      console.log("nao foi possivel encontrar o cep")
    } finally {
      setLoading(false)
    }
  }

  function onChange(e) {
    setValueInput(e.target.value.replace(/\D/g, "").trim())
  }

  async function onDelete(e) {
    const cepDoc = doc(db, "cep", e.target.id)
    await deleteDoc(cepDoc)
  }

  function onEdit({ target }) {
    onModalOpen()
    const filteredCEP = data.find(item => item.id === target.id)
    setEdit(filteredCEP)
  }

  function onChangeEdit({ target }) {
    const newData = { [target.name]: target.value }
    setEdit(prev => ({ ...prev, ...newData }))
  }

  async function onConfirmedEdit(e) {
    const cepDoc = doc(db, "cep", e.target.id)
    await updateDoc(cepDoc, edit)
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

      {loading && (
        <div className="absolute bottom-0 top-0 left-0 right-0">
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      )}
    </div>
  )
}

export default App
