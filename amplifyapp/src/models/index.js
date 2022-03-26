// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const BiPlatforms = {
  "TABLEAU": "TABLEAU",
  "QUICKSIGHT": "QUICKSIGHT"
};

const { Tables, Files, Datasource, Dataset, BIMProject, QsENV, QsCredentials, QsProject, QsTemplate, QsAnalysis, QsDashboard, TableauENV, TableauCredentials, TableauProject, Department, Customer, TableauSheets, TableauWorkbook } = initSchema(schema);

export {
  Tables,
  Files,
  Datasource,
  Dataset,
  BIMProject,
  QsENV,
  QsCredentials,
  QsProject,
  QsTemplate,
  QsAnalysis,
  QsDashboard,
  TableauENV,
  TableauCredentials,
  TableauProject,
  Department,
  Customer,
  TableauSheets,
  TableauWorkbook,
  BiPlatforms
};