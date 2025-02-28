'use client'

import { useForm } from 'react-hook-form';
import { useState } from 'react';

import styled from 'styled-components';
import stepOne from '@/assets/images/step-1.png';
import stepTwo from '@/assets/images/step-2.png';
import stepThree from '@/assets/images/step-3.png';

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;

const Icon = styled.img`
  width: 90px;
  margin-bottom: 16px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-block: 30px;
`
const ErrorMessage = styled.span`
    width: 100%;
    max-width: 530px;
    color: red;
    font-size: 12px;
`

const StatusMessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 100px;
`

const Spacer = styled.div`
    height: 40px;
`

const TextArea = styled.textarea`
    max-width: 500px;
`

const Input = styled.input`
    max-width: 500px;
`

const Button = styled.button`
    max-width: 530px;
`

const LeadForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submissionStatus, setSubmissionStatus] = useState<string>('');

    const onSubmit = async (data: any) => {
        try {
            // await axios.post('http://localhost:3001/api/submit-lead', data);
            setSubmissionStatus('success');
        } catch (error) {
            setSubmissionStatus('error');
        }
    };

    return (
        <div className='container container-md'>
            {
                submissionStatus !== 'success' ? <Form onSubmit={handleSubmit(onSubmit)}>
                    <Icon src={stepOne.src} alt='stepOne' />
                    <Title>
                        Want to understand your visa options?
                    </Title>
                    <Description>Submit the form below and our team of experienced attorneys will review your information and send a preliminary assessment of your case based on your goals.</Description>
                    <Spacer />
                    <Input {...register('firstName', { required: true })} placeholder="First Name" />
                    {errors.firstName && <ErrorMessage>This field is required *</ErrorMessage>}

                    <Input {...register('lastName', { required: true })} placeholder="Last Name" />
                    {errors.lastName && <ErrorMessage>This field is required *</ErrorMessage>}

                    <Input {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} placeholder="Email" />
                    {errors.email && <ErrorMessage>Enter a valid email</ErrorMessage>}

                    <Input {...register('linkedin', { required: true })} placeholder="LinkedIn Profile" />
                    {errors.linkedin && <ErrorMessage>This field is required</ErrorMessage>}

                    <Spacer />
                    <Icon src={stepTwo.src} alt='stepTwo' />
                    <Title>
                        Visa categories of interest?
                    </Title>

                    <label>
                        <Input
                            type="checkbox"
                            {...register('visas', { required: true })}
                            value="visa1"
                        />
                        Visa 1
                    </label>
                    <label>
                        <Input
                            type="checkbox"
                            {...register('visas', { required: true })}
                            value="visa2"
                        />
                        Visa 2
                    </label>
                    {errors.visas && <ErrorMessage>At least one visa option must be selected</ErrorMessage>}
                    <Spacer />
                    <Icon src={stepThree.src} alt='stepThree' />
                    <Title>
                        How can we help you?
                    </Title>

                    <Input {...register('resume', { required: true })} type="file" />
                    {errors.resume && <ErrorMessage>Resume is required</ErrorMessage>}

                    <TextArea {...register('additionalInfo')} placeholder="What is your current status and when does it expire? What is your past immigration history? Are you looking for long-term permanent residency or short-term employment visa or both? Are there any timeline considerations?" rows={10} />

                    <Button type="submit">Submit</Button>
                    {submissionStatus === 'error' && <div>Something went wrong. Please try again.</div>}
                </Form> : <StatusMessageWrapper>
                    <Icon src={stepOne.src} alt='stepOne' />
                    <Title> Thank you </Title>
                    <Description>Your information submitted to our team of immigration attorneys. Expect an email from hello@tryalma.ai</Description>
                    <Spacer />
                    <Button type="submit">Go back to home</Button>
                </StatusMessageWrapper>
            }
        </div>
    );
};

export default LeadForm;
