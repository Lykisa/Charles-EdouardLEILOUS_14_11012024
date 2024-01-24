import Input from "../components/Input"
import { Link } from "react-router-dom"
import data from '../data/data.json'

function Home() {

    function onSubmit(e) {

        e.preventDefault()

        /* Vérification ou création LS */
        let employees;
        if (localStorage.getItem('Employee_List') != null) {
            employees = JSON.parse(localStorage.getItem('Employee_List'));
        } else {
            employees = [];
        }

        /* Récupération des données du formulaire */
        const getAllFormElements = element => Array.from(element.elements).filter(tag => ["select", "input"].includes(tag.tagName.toLowerCase()));
        const pageFormElements = getAllFormElements(document.forms[0]);

        /* Transformation des données en tableau puis en objet */
        const form = pageFormElements.map(element => [element.id, element.value])
        const dataForm = Object.fromEntries(form);
        console.log(dataForm);

        /* Ajout de l'id pour le nouvel employé */
        const newId = employees.length + 1
        dataForm.id = newId

        /* Ajout des données du formulaire dans le tableau Employées */
        employees.push(dataForm)

        /* Ajout de la nouvelle liste dans le LS */
        localStorage.setItem('Employee_List', JSON.stringify(employees))

    }



    return(
        <div className="container">
            <Link to='/employee-list'>
                View Current Employees
            </Link>
            <h2>Create Employee</h2>
            <form onSubmit={(e) => onSubmit(e)} id="create-employee">
                <Input  type="text" 
                        name="firstName"
                        id="firstName"
                        label="First Name"
                        required='required' />
                
                <Input  type="text" 
                        name="lastName"
                        id="lastName"
                        label="Last Name"
                        required='required' />

                <Input  type="date" 
                        name="date-of-birth"
                        id="birthdate"
                        label="Date of Birth"
                        required='required' />

                <Input  type="date" 
                        name="start-date"
                        id="startDate"
                        label="Start Date"
                        required='required' />

                <fieldset className="address">
                    <legend>Address</legend>

                    <Input  type="text" 
                            name="street"
                            id="street"
                            label="Street"
                            required='required' />

                    <Input  type="text" 
                            name="city"
                            id="city"
                            label="City"
                            required='required' />

                    <Input  type="select" 
                            name="state"
                            id="state"
                            label="State"
                            options={data.states}
                            required='required' />

                    <Input  type="number" 
                            name="zip-code"
                            id="zipcode"
                            label="Zip Code"
                            required='required' />
                </fieldset>

                <Input  type="select" 
                        name="department"
                        id="department"
                        label="Department"
                        options={data.department}
                        required='required' />

                <button type="submit">Save</button>
            </form>
            
        </div>
    )
}

export default Home