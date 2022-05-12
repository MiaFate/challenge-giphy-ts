import React from 'react';
import { useNavigate } from "react-router-dom";
import { VStack, Center, Button, Input, FormControl, FormLabel, FormErrorMessage, FormErrorIcon, InputRightElement } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import users from "../../bd/users";
import Cookies from 'universal-cookie';

type username = string | boolean;
type password = string | boolean;

type data={
    username: username;
    password: password;
}
interface user{
    username: string,
    password: string
}

const LoginForm:React.FC = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: { username: false, password: false } });

    const onSubmit = (data:data) => {
        const { username, password } = data;
        const isFound = findUser(username, password);

        mustRedirect(isFound);
    };

    const findUser = (usuario:username, contraseña:password) => {
        const userFound = users.find((user:user) => user.username === usuario && user.password === contraseña);
        return Boolean(userFound);
    };

    const mustRedirect = (found:boolean) => {
        if (found) {
            const cookies = new Cookies();
            cookies.set('logged', true, { path: '/', maxAge: 60 });
            navigate("/home");
        } else {
            const cookies = new Cookies();
            cookies.set('logged', false, { path: '/' });
            alert("Usuario o contraseña incorrectos");
        }
    };

    return (
        <Center w='100vw' h='100vh'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <VStack textAlign={"center"}  mt={8} spacing="20px">
                
                    <FormControl id="usuario" isInvalid={Boolean(errors.username)}>
                        <FormLabel htmlFor="usuario">Usuario</FormLabel>
                        <Input type="text"  placeholder="Usuario" {...register("username", { required: "Ingrese su nombre de usuario" })} />
                        {errors.username && <> <InputRightElement><FormErrorIcon /></InputRightElement><FormErrorMessage>{errors.username.message}</FormErrorMessage> </>}
                    </FormControl>
                    <FormControl id="contraseña" isInvalid={Boolean(errors.password)}>
                        <FormLabel htmlFor="contraseña">Contraseña</FormLabel>
                        <Input type="password" placeholder="Contraseña" {...register("password", { required: "Ingrese su contraseña" })} />
                        {errors.password && <> <InputRightElement><FormErrorIcon /></InputRightElement><FormErrorMessage>{errors.password.message}</FormErrorMessage> </>}
                    </FormControl>
                    <Button type="submit" bg="pink.400" mt={5} _hover={{ bg: "cyan.400" }}>
                        Ingresar
                    </Button>
                </VStack>
            </form>
        </Center>
    );
};

export default LoginForm;