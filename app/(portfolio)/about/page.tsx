"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    name: z.string().min(2, { message: "Please enter your name." }),
    email: z.string().min(1, {
        message: "Please enter valid email."
    }).email("Please enter valid email."),
    message: z.string(),
})

const AboutPage = () => {
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        }
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // const test = await fetch('http://localhost:6001/api/contact', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });

        // const data = await test.json()
        // console.log("GET: ", data);
        try {
            const response = await fetch('https://api.easternlai.me/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            });
            console.log(response)
            toast({
                description: "Thank you for reaching out, I will return your message shortly."
            })
            form.reset()
        } catch (error) {
            console.log("error_test: ", error)
        }
    }

    return (
        <div className="text-center md:text-left">
            <div className="flex-col space-y-1 md:text-lg font-light">
                <div className=""><span className="font-bold">contact:</span> <span className="italic">eastern.lai@gmail.com</span> | 415.420.1297</div>
                <div className=""><span className="font-bold">github: </span><a className="underline" href="https://github.com/easternlai">https://github.com/easternlai</a></div>
                <div className=""><span className="font-bold">LinkedIn: </span><a className="underline" href="https://www.linkedin.com/in/eastern-lai-3b05b585/">https://www.linkedin.com/in/eastern-lai-3b05b585/</a></div>
            </div>
            <div className="w-full flex justify-center md:justify-normal mt-8 mb-48">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-1/2 min-w-96">
                        <div className="text-3xl mt-20">Want to get in touch???</div>
                        <div className="text-xl font-light">Leave a message!.</div>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="enter your name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="enter your email address" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="please leave a message" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="pt-4">
                            <Button className="w-full md:w-24" type="submit">Submit</Button>
                        </div>
                    </form>
                </Form>
            </div>

        </div>
    )
}

export default AboutPage;