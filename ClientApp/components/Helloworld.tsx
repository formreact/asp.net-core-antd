import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

import { FormComponentProps } from 'antd/lib/form/Form';

interface UserFormProps extends FormComponentProps {
    age: number;
    name: string;
}

function hasErrors(fieldsError: any) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component<any, any> {
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }
    handleSubmit = (e: any) => {
        e.preventDefault();
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        var userNameStatus:any = "";
        if (userNameError) {
            userNameStatus = "error";
        }
        var passwordStatus: any = "";
        if (passwordError) {
            passwordStatus = "error";
        }
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem
                    validateStatus={userNameStatus}
                    help={userNameError || ''}
                >
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                        )}
                </FormItem>
                <FormItem
                    validateStatus={passwordStatus}
                    help={passwordError || ''}>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                        )}
                </FormItem>
                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={hasErrors(getFieldsError())}
                    >
                        Log in 2
          </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedHorizontalLoginForm = Form.create<any>({})(HorizontalLoginForm);

interface AddUrlFormState {
    currentCount: number;
    form: UserFormProps;
}

export class Helloworld extends React.Component<RouteComponentProps<{}>, AddUrlFormState> {
    constructor() {
        super();
    }

    public render() {
        return <div>
            <WrappedHorizontalLoginForm name="tomcat" age={10} />
        </div>;
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }
}
