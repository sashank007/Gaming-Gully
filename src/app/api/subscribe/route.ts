import { NextRequest, NextResponse } from 'next/server';
import * as brevo from '@getbrevo/brevo';

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Split name into first and last name if provided
    let firstName = '';
    let lastName = '';
    if (name) {
      const nameParts = name.trim().split(' ');
      firstName = nameParts[0] || '';
      lastName = nameParts.slice(1).join(' ') || '';
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error('BREVO_API_KEY not found');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const apiInstance = new brevo.ContactsApi();
    apiInstance.setApiKey(brevo.ContactsApiApiKeys.apiKey, apiKey);

    const createContact = new brevo.CreateContact();
    createContact.email = email;
    createContact.listIds = [2];
    createContact.updateEnabled = true;
    createContact.attributes = {
      FIRSTNAME: firstName,
      LASTNAME: lastName,
    };

    await apiInstance.createContact(createContact);

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Brevo API Error:', error);

    if (error.response?.body?.code === 'duplicate_parameter') {
      return NextResponse.json(
        { message: 'Email already subscribed!' },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}
