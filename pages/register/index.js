import { Label, TextInput, Button, ListGroup, Checkbox } from "flowbite-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../../contexts/AuthProvider";

const index = () => {
    const { signUpUser } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        signUpUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="bg-white text-black dark:bg-black dark:text-white max-w-[1200px] mx-auto px-2 sm:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-8">
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
                <div className="flex items-center gap-2 text-red-600">
                    Errors
                </div>
                <Button type="submit">
                    Submit
                </Button>
            </form>
            <div>
                <div className="flex justify-center mt-7">
                    <ListGroup>
                        <ListGroup.Item icon={FcGoogle}>
                            Sign in with google
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </div>
    );
};

export default index;