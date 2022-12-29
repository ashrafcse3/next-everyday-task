import Head from "next/head";
import { Label, Textarea, Button, Spinner, FileInput } from "flowbite-react";
import PageHeader from "../../components/shared/PageHeader";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../contexts/AuthProvider";

const index = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [btnLoading, setBtnLoading] = useState(false);
    const { user } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!user?.uid) {
            router.push('/login');
        }
    }, [user, router]);

    const onSubmit = data => {
        setBtnLoading(true);

        let dataObject = {
            task: data.your_task,
            task_completed: false,
        };

        if (data?.task_image?.length > 0) {
            // add the imagebb uploaded image link to dataObject if there is one
            const formData = new FormData();
            formData.append('image', data.task_image[0]);

            fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_APIKEY}`, {
                method: 'POST',
                body: formData
            })
                .then((response) => response.json())
                .then((result) => {
                    console.log('Success:', result);

                    dataObject.optional_image_lg = result?.data?.image?.url;
                    dataObject.optional_image_md = result?.data?.medium?.url;
                    dataObject.optional_image_sm = result?.data?.thumb?.url;

                    // save task to db with image
                    saveTaskToDB(dataObject);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        }
        else {
            saveTaskToDB(dataObject);
        }

        console.log('dataObject', dataObject);
    };

    const saveTaskToDB = preparedData => {
        // post the data into database
        fetch('https://everyday-task-server-ashrafcse3.vercel.app/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(preparedData)
        })
            .then(res => res.json())
            .then(resData => {
                console.log(resData);
                // set the btn loading false after data loaded
                setBtnLoading(false);
                // navigate to the my tasks page after data added
                router.push('/mytasks');
            });
    }

    return (
        <div className="bg-white text-black dark:bg-black dark:text-white max-w-[1200px] mx-auto px-2 sm:px-4">
            <Head>
                <title>Add task | E T</title>
            </Head>
            <PageHeader title='Add Task' />
            <main>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div id="textarea">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="task"
                                value="Add your task"
                            />
                        </div>
                        <Textarea
                            id="task"
                            placeholder="Write your task"
                            rows={4}
                            required={true}
                            {...register('your_task')}
                        />
                    </div>
                    <div id="fileUpload">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="file"
                                value="(optional) Add an image with your task"
                            />
                        </div>
                        <FileInput
                            id="file"
                            {...register('task_image')}
                        />
                    </div>
                    <Button type="submit">
                        {
                            btnLoading ?
                                <div className="mr-3">
                                    <Spinner
                                        size="sm"
                                        light={true}
                                    />
                                </div>
                                :
                                ''
                        }
                        Add
                    </Button>
                </form>
            </main>
        </div>
    );
};

export default index;