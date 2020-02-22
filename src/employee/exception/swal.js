import Swal from "sweetalert2";

export function responseStatus201(response) {
    Swal.fire({
        position: 'middle',
        icon: 'success',
        title: response.message,
        showConfirmButton: false,
        timer: 5000
    }).then(r => r);
}

export function responseStatus400(response) {
    Swal.fire({
        position: 'middle',
        icon: 'error',
        title: response.message,
        showConfirmButton: false,
        timer: 5000
    }).then(r => r);
}

export function responseStatus200(response) {
    Swal.fire(
        'Deleted!',
        response.message,
        'success'
    )
}

export async function responseDelete() {
    let response = "";
    await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
        response = result;
    })
    return response;
}
