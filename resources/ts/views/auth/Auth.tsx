import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store';

import { Row } from '../../components/layouts/Row';
import { Col } from '../../components/layouts/Col';

import { Card } from '../../components/cards/Card';
import { CardHeader } from '../../components/cards/CardHeader';
import { CardBody } from '../../components/cards/CardBody';
import { CardFooter } from '../../components/cards/CardFooter';

import { Button } from '../../components/form/Button';

import { Tabs } from '../../components/tabs/Tabs';
import { TabInfo } from '../../components/tabs/TabInfo';

import { FormBuilder } from '../../components/form/Builder/FormBuilder';
import { FormDescription } from '../../components/form/FormDescription';
import { InputDescription } from '../../components/form/InputDescription';
import { FormValidator } from '../../components/form/validation/FormValidator';
import { EInputTypes } from '../../components/form/Builder/EInputTypes';

import { AuthController } from '../../controllers/api/AuthController';

export function Auth() {
  const [isLoading, setLoading] = useState(false);
  const profile = useSelector((state: RootState) => state.profile);
  const profileDispatch = useDispatch()

  const formDescription: FormDescription = FormDescription.create(
    'auth'
  )
  .addField(
    InputDescription.create('email', EInputTypes.string)
      .setMax(32)
      .setMin(3)
      .setRequired(true)
      .setPlaceholder('email@site.org')
      .setLabel('Login')
  )
  .addField(
    InputDescription.create('password', EInputTypes.password)
      .setMax(64)
      .setMin(6)
      .setRequired(true)
      .setPlaceholder('******')
      .setLabel('Password')
  )
  .setValidator(
    new FormValidator()
  );

  const _tabs: Array<TabInfo> = [
    {
      name: 'login',
      label: 'Login',
      enabled: true,
      callback: () => {},
    },
    {
      name: 'register',
      label: 'Register',
      enabled: true,
      callback: () => {},
    }
  ];

  const [isValidationEnabled, setValidationEnabled] = useState(false);

  let authController: AuthController|undefined;
  useEffect(
    () => {
      authController = new AuthController();
    },
    [authController]
  );

  const login = () => { // @TODO: Auth::login()
    setLoading(true);
    setValidationEnabled(true);

    const validator: FormValidator|null = formDescription.validator;
    if (!validator) {
      setLoading(false);
      return;
    }

    validator.inputs = formDescription.fields;
    validator.setData(formDescription.values);
    const validationResult: Map<string, string>|undefined = validator.validate();
    if (!validationResult || !validationResult.size) {
      setLoading(false);
      return;
    }

    const email: string|undefined = formDescription.getStringValue('email');
    const password: string|undefined = formDescription.getStringValue('password');
    if (!email || !password) {
      setLoading(false);
      return;
    }

    (new AuthController())
        .login(email, password)
        .then(response => {
          console.log(response);
          setLoading(false);
        })
        .catch(error => {
          setLoading(false);
          console.log(error);
        })
    //const request: LoginRequest = new LoginRequest(email, password);
    // axios.post<LoginResponse>(
    //     'http://localhost/api/v1/auth/login',
    //     request,
    //     {
    //       headers: {
    //         'X-Requested-With': 'XMLHttpRequest',
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //     }
    // )
    //   .then(response => {
    //     setLoading(false);
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     setLoading(false);
    //     console.error(error);
    //   });
  };

  return (
    <Row className={'auth-view w-full lg:w-1/2 items-center justify-center'}>
      <Col>
        <Card
          size={'md'}
        >
          <CardHeader>
            <Tabs
              tabs={_tabs}
            />
          </CardHeader>
          <CardBody>
            <FormBuilder
              formDescription={ formDescription }
              validation={ isValidationEnabled }
              disabled={ isLoading }
            />
          </CardBody>
          <CardFooter>
            <Col>
              <Row>
                <Button
                  onClick={ login }
                  disabled={ isLoading }
                >
                  Login
                </Button>
              </Row>
            </Col>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
}
