import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import { Button, TextField } from "@mui/material"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

export default function BasicModal({
  stateModal,
  handleClose,
  dataEdit,
  handleConfirmed,
  handleChangeEdit,
}) {
  const { bairro, localidade, cep, uf, logradouro } = dataEdit

  return (
    <div>
      <Modal
        open={stateModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="flex flex-col">
          <div className="mb-5 w-full">
            <TextField
              id="filled-basic"
              label="CEP"
              disabled
              variant="filled"
              className="w-full"
              defaultValue={cep}
              onChange={handleChangeEdit}
              name={"cep"}
            />
          </div>
          <div className="mb-5 w-full">
            <TextField
              id="filled-basic"
              label="BAIRRO"
              variant="filled"
              className="w-full"
              defaultValue={bairro}
              onChange={handleChangeEdit}
              name={"bairro"}
            />
          </div>
          <div className="mb-5 w-full">
            <TextField
              id="filled-basic"
              label="LOGRADOURO"
              variant="filled"
              className="w-full"
              defaultValue={logradouro}
              onChange={handleChangeEdit}
              name={"logradouro"}
            />
          </div>
          <div className="mb-5 w-full">
            <TextField
              id="filled-basic"
              label="LOCALIDADE"
              variant="filled"
              className="w-full"
              defaultValue={localidade}
              onChange={handleChangeEdit}
              name={"localidade"}
            />
          </div>
          <TextField
            id="filled-basic"
            label="ESTADO"
            variant="filled"
            defaultValue={uf}
            onChange={handleChangeEdit}
            name={"uf"}
          />
          <div className="mt-10 text-end">
            <Button variant="contained" onClick={handleConfirmed}>
              CONFIRMAR
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
