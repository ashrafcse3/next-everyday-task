import { Label, TextInput, Button, ListGroup, Checkbox } from "flowbite-react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FcGoogle } from 'react-icons/fc';
import { handleGoogleSignIn } from "../../components/shared/js_functions/handleGoogleSignIn";
import PageHeader from "../../components/shared/PageHeader";
import { AuthContext } from "../../contexts/AuthProvider";

const index = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        signInUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Logged in successfully');
                // console.log(router);
                // router.push('/mytasks');
                router.push(router.query?.referrer || '/mytasks');
            })
            .catch(error => {
                // console.log(error.message);
                setErrorMessage(error.message);
            })
    }

    return (
        <div className="bg-white text-black dark:bg-black dark:text-white max-w-[1200px] mx-auto px-2 sm:px-4">
            <Head>
                <title>Login | E T</title>
            </Head>
            <PageHeader title={'Login Form'} />
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-8">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email"
                            type="email"
                            placeholder="Your email"
                            required={true}
                            {...register('email')}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password"
                            type="password"
                            placeholder="Your password"
                            required={true}
                            {...register('password')}
                        />
                    </div>
                    {
                        errorMessage ?
                            <div className="flex items-center gap-2 text-red-600">
                                {errorMessage}
                            </div>
                            : ''
                    }
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
                <div>
                    <div className="flex justify-center mt-7" onClick={() => handleGoogleSignIn(signInWithGoogle, router)}>
                        <ListGroup>
                            <ListGroup.Item icon={FcGoogle}>
                                Sign in with google
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;