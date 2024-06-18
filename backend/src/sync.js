// server/sync.js
import { google } from 'googleapis';
import { FormData } from './models/FormData.js';

const SPREADSHEET_ID = '1Euq_GKXK_LsVeWgvmjaXPhnjc7Ud33X_F7gPCTSgTF4';
//const SPREADSHEET_ID = '1g9fxedaGiM6ieopmeosqr0BO3tE77A80MbMERCjOy_w';

const auth = new google.auth.GoogleAuth({
  keyFile:'./src/cred.json',
  scopes:['https://www.googleapis.com/auth/spreadsheets']
})

async function syncData() {

  const sheets = google.sheets({ version: 'v4', auth });

  const formData = await FormData.findAll();
  console.log(formData);
  const values = formData.map(data => [data.formType, data.name, data.phoneNumber]);

  const resource = {
    values,
  };

  try {
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A2',
      valueInputOption: 'RAW',
      resource,
    });
    console.log('Data synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing data:', error);
  }
}

export default syncData;
