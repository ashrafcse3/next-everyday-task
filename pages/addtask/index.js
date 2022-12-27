import Head from "next/head";
import { Label, Textarea, Button, FileInput } from "flowbite-react";
import PageHeader from "../../components/shared/PageHeader";

const index = () => {
    return (
        <div className="bg-white text-black dark:bg-black dark:text-white max-w-[1200px] mx-auto px-2 sm:px-4">
            <Head>
                <title>Add task | E T</title>
            </Head>
            <PageHeader title='Add Task' />
            <main>
                <form className="flex flex-col gap-4">
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
                            required={true}
                            rows={4}
                        />
                    </div>
                    <div id="fileUpload">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="file"
                                value="Add an image with your task (optional)"
                            />
                        </div>
                        <FileInput
                            id="file"
                            helperText="You can add an image with your task"
                        />
                    </div>
                    <Button type="submit">
                        Add
                    </Button>
                </form>
            </main>
        </div>
    );
};

export default index;