import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';

const client = new RecaptchaEnterpriseServiceClient();

export enum ExpectedAction {
  SignUp = 'sign-up',
}

type VerifyRecaptchaParams = {
  projectID: string;
  recaptchaKey: string;
  token: string;
  expectedAction: ExpectedAction;
};

/**
 * Verifies a reCAPTCHA Enterprise token by creating an assessment with Google.
 *
 * Returns `true` if the token is valid and the risk score passes your threshold.
 */
export const verifyRecaptcha = async ({
  projectID,
  recaptchaKey,
  token,
  expectedAction,
}: VerifyRecaptchaParams): Promise<boolean> => {
  try {
    const projectPath = client.projectPath(projectID);

    const [response] = await client.createAssessment({
      parent: projectPath,
      assessment: {
        event: {
          token,
          siteKey: recaptchaKey,
          expectedAction,
        },
      },
    });

    // Validate token properties
    if (!response.tokenProperties?.valid) {
      console.error(
        'Invalid reCAPTCHA token:',
        response.tokenProperties?.invalidReason ?? 'unknown reason'
      );
      return false;
    }

    // Ensure the expected action matches
    if (response.tokenProperties.action !== expectedAction) {
      console.error('Unexpected reCAPTCHA action');
      return false;
    }

    const score = response.riskAnalysis?.score ?? 0;
    console.log('reCAPTCHA score:', score);

    return score > 0.5;
  } catch (err) {
    console.error('Error verifying reCAPTCHA:', err);
    return false;
  }
};
