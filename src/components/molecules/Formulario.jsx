import Inp from '../atoms/inputs/InputT'
import GenderSelect from '../atoms/selects/GenderSelect'
import Register from '../atoms/buttons/register'
import Text from '../atoms/Texts/Text'
function Formulario(){
    return(
        <form>
            <Text value={"Ingrese su Nombre"}></Text>
            <Inp type={"Text"} id={"Nombre"} placeholder={"Nombre"}></Inp>
            <Text value={"Ingrese su apellido"}></Text>
            <Inp type={"Text"} id={"Apellido"} placeholder={"Apellido"}></Inp>
            <Text value={"Ingrese su Correo"}></Text>
            <Inp type={"Email"} id={"Email"} placeholder={"Correo"}></Inp>
            <Text value={"Nombre de usuario"}></Text>
            <Inp type={"Text"} id={"UserName"} placeholder={"Nombre de usuario"}></Inp>
            <Text value={"Ingrese su Contraseña"}></Text>
            <Inp type={"Password"} id={"Password"} placeholder={"Contraseña"}></Inp>
            <Text value={"Confirme su Contraseña"}></Text>
            <Inp type={"Password"} id={"PasswordC"} placeholder={"Confirmar Contraseña"}></Inp>
            <Text value={"Ingrese su Fecha de Nacimiento"}></Text>
            <Inp type={"Date"} id={"Nacimiento"} placeholder={"Fecha de Nacimiento"}></Inp>
            <Text value={"Seleccione su genero"}></Text>
            <GenderSelect/>
            <br></br>
            <Register></Register>
        </form>
    )
}
export default Formulario;