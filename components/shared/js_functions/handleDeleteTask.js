import { toast } from "react-hot-toast";

export const handleDeleteTask = (_id, refetch) => {
    fetch(`http://localhost:4000/task/${_id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            refetch();
            toast.success('Task deleted successfully');
        })
        .catch(error => {
            console.error(error);
        })
}