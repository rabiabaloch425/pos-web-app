import { Box, CardFooter, Stack } from '@chakra-ui/react';
import AuthLayout from '@lib/components/auth/AuthLayout';
import {
  AuthCard,
  AuthCardBody,
  AuthCardHeader,
} from '@lib/components/auth/card';
import Button from '@lib/components/base/button';
import Heading from '@lib/components/base/heading';
import Input from '@lib/components/base/input';
import Label from '@lib/components/base/label';
import SubHeading from '@lib/components/base/subHeading';
import Link from 'next/link';

const ForgetPassword = () => {
  return (
    <AuthLayout>
      <AuthCard mt="4em">
        <AuthCardHeader py="2rem">
          <Heading>Reset Your Password!</Heading>
          <Box mx="2em">
            <SubHeading>
              You will receive an e-mail with a verification code. Please check
              you inbox.
            </SubHeading>
          </Box>
        </AuthCardHeader>
        <AuthCardBody maxH="30vh">
          <Stack>
            <Label
              fontSize={{ base: '12px', sm: '14px', md: '16px' }}
              ml={2}
              className="primary-font-medium"
            >
              Email Address
            </Label>

            <Input placeholder="Enter Email" />
            {/* <ErrorMessage
                  touched={props.touched.email}
                  message={
                    t(
                      (props.errors.email as keyof typeof resources.common) ||
                        ''
                    ) || ''
                  }
                /> */}
          </Stack>
        </AuthCardBody>
        <CardFooter mt="-2em">
          <Link
            href="/auth/verification"
            style={{
              width: '100%',
            }}
          >
            <Button
              w="full"
              styledVariant="blue"
              fontSize={{ base: '12px', md: '20px ' }}
              fontWeight="400"
            >
              Send Verification Code
            </Button>
          </Link>
        </CardFooter>
      </AuthCard>
    </AuthLayout>
  );
};

export default ForgetPassword;
