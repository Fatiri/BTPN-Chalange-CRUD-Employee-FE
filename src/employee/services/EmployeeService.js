import {responseDelete, responseStatus200, responseStatus201, responseStatus400} from "../exception/swal";

export async function getDataEmployee() {

    return await fetch('https://simple-contact-crud.herokuapp.com/contact', {method: "GET"})
        .then((result) => {
            return result.json();
        });
}

export async function submitDataEmployee(dataEmployee) {
    return await fetch("https://simple-contact-crud.herokuapp.com/contact", {
        method: "POST", headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dataEmployee)
    }).then(async result => {
        const response = await result.json();
        if (result.status === 201) {
            responseStatus201(response);
        } else if (result.status === 400) {
            responseStatus400(response);
        }
    }).catch(reason => {
        console.log(reason)
    });
}

export async function getDataEmployeeById(employeeId) {
    return await fetch(`https://simple-contact-crud.herokuapp.com/contact/${employeeId}`, {method: "GET"})
        .then((result) => {
            return result.json();
        });
}

export async function updateDataEmployee(employeeData, employeeId) {
    return await fetch(`https://simple-contact-crud.herokuapp.com/contact/${employeeId}`, {
        method: "PUT", headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(employeeData)
    }).then(async result => {
        const response = await result.json();
        if (result.status === 201) {
            responseStatus201(
                response);
        } else if (result.status === 400) {
            responseStatus400(response);
        }
    }).catch(reason => {
        console.log(reason)
    });
}

export async function deleteDatEmployeeById(employeeId) {
    const result = await responseDelete();
    if (result.value) {
        return fetch(`https://simple-contact-crud.herokuapp.com/contact/${employeeId}`, {
            method: "DELETE", headers: {'Content-Type': 'application/json'},
        })
            .then(async (result) => {
                const response = await result.json();
                if (result.status === 200) {
                    responseStatus200(response);
                } else if (result.status === 400) {
                    responseStatus400(response);
                }
            });
    }

}
