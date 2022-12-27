import Head from "next/head";
import { Label, Textarea, Button } from "flowbite-react";

const index = () => {
    return (
        <div className="bg-white text-black dark:bg-black dark:text-white max-w-[1200px] mx-auto px-2 sm:px-4">
            <Head>
                <title>Add task | E T</title>
            </Head>
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
                    <Button type="submit">
                        Add
                    </Button>
                </form>
            </main>
        </div>
    );
};

export default index;