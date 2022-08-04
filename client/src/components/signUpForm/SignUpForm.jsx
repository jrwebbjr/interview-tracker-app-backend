import { Component } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from '../../utilities/users-service';
import { motion } from "framer-motion";

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: '',
    }

    handleChange = (evt) => {
        this.setState({...this.state, [evt.target.name]: evt.target.value, error: ''})
    }

    handleSubmit = async (evt) => {
        evt.preventDefault()
        try{
            const formData = {...this.state};
            delete formData.error;
            delete formData.confirm;
            const user = await signUp(formData)
            localStorage.setItem('token', user)
            useNavigate('/index')
        } catch (error) {
            this.setState({ error: 'Sign Up Failed' })
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div className="min-h-full">
                <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ ease: 'easeInElastic', duration: .5 }}
                className="flex justify-center">
                    <div className="m-10 mt-5 mb-5 block p-6 rounded-lg shadow-lg bg-white border-2 border-solid border-indigo-600">
                        <form className="flex flex-col gap-5" autoComplete="off" onSubmit={this.handleSubmit}>
                            <div className="p-5">
                                <label className="pr-4">Name </label>
                                <input className="flex border border-solid border-gray-300" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                            </div>
                            <div className="p-5">
                                <label className="pr-4">Email </label>
                                <input className="flex border border-solid border-gray-300" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                            </div>
                            <div className="p-5">
                                <label className="pr-4">Password </label>
                                <input className="flex border border-solid border-gray-300" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                            </div>
                            <div className="p-5">
                                <label className="pr-4">Confirm </label>
                                <input className="flex border border-solid border-gray-300" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                            </div>
                        <div className="flex justify-center">
                            <div className="">
                                <button className="nline-block px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="submit" disabled={disable}>SIGN UP</button>
                            </div>
                        </div>
                        <h2 className="">&nbsp;{this.state.error}</h2>
                        </form>
                    </div>
                </motion.div>
            </div>
        )
    }
}