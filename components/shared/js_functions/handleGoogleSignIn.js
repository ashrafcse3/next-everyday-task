import { toast } from "react-hot-toast";

export const handleGoogleSignIn = (signInWithGoogle, router) => {

    signInWithGoogle()
        .then(result => {
            toast.success('Logged in with google');
            router.push('/mytasks');
        })
        .catch(error => {
            toast.error(error.message);
            console.error(error.message);
        })
}