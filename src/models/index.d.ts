import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum BiPlatforms {
  TABLEAU = "TABLEAU",
  QUICKSIGHT = "QUICKSIGHT"
}



type TablesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FilesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DatasourceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DatasetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BIMProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QsENVMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QsCredentialsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QsProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QsTemplateMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QsAnalysisMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QsDashboardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TableauENVMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TableauCredentialsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TableauProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DepartmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CustomerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TableauSheetsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TableauWorkbookMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Tables {
  readonly id: string;
  readonly name: string;
  readonly datasourceid: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tables, TablesMetaData>);
  static copyOf(source: Tables, mutator: (draft: MutableModel<Tables, TablesMetaData>) => MutableModel<Tables, TablesMetaData> | void): Tables;
}

export declare class Files {
  readonly id: string;
  readonly name: string;
  readonly URL: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Files, FilesMetaData>);
  static copyOf(source: Files, mutator: (draft: MutableModel<Files, FilesMetaData>) => MutableModel<Files, FilesMetaData> | void): Files;
}

export declare class Datasource {
  readonly id: string;
  readonly name: string;
  readonly Tables?: Tables | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly datasourceTablesId?: string | null;
  constructor(init: ModelInit<Datasource, DatasourceMetaData>);
  static copyOf(source: Datasource, mutator: (draft: MutableModel<Datasource, DatasourceMetaData>) => MutableModel<Datasource, DatasourceMetaData> | void): Datasource;
}

export declare class Dataset {
  readonly id: string;
  readonly datasource?: string[] | null;
  readonly files?: string[] | null;
  readonly bimprojectID: string;
  readonly Datasource?: Datasource | null;
  readonly Files?: Files | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly datasetDatasourceId?: string | null;
  readonly datasetFilesId?: string | null;
  constructor(init: ModelInit<Dataset, DatasetMetaData>);
  static copyOf(source: Dataset, mutator: (draft: MutableModel<Dataset, DatasetMetaData>) => MutableModel<Dataset, DatasetMetaData> | void): Dataset;
}

export declare class BIMProject {
  readonly id: string;
  readonly Did: string;
  readonly Source: BiPlatforms | keyof typeof BiPlatforms;
  readonly Destination: BiPlatforms | keyof typeof BiPlatforms;
  readonly Datasets?: (Dataset | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BIMProject, BIMProjectMetaData>);
  static copyOf(source: BIMProject, mutator: (draft: MutableModel<BIMProject, BIMProjectMetaData>) => MutableModel<BIMProject, BIMProjectMetaData> | void): BIMProject;
}

export declare class QsENV {
  readonly id: string;
  readonly name?: string | null;
  readonly qsprojectid?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<QsENV, QsENVMetaData>);
  static copyOf(source: QsENV, mutator: (draft: MutableModel<QsENV, QsENVMetaData>) => MutableModel<QsENV, QsENVMetaData> | void): QsENV;
}

export declare class QsCredentials {
  readonly id: string;
  readonly awsid?: string | null;
  readonly QsProjects?: (QsProject | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<QsCredentials, QsCredentialsMetaData>);
  static copyOf(source: QsCredentials, mutator: (draft: MutableModel<QsCredentials, QsCredentialsMetaData>) => MutableModel<QsCredentials, QsCredentialsMetaData> | void): QsCredentials;
}

export declare class QsProject {
  readonly id: string;
  readonly name: string;
  readonly Did: string;
  readonly QsTemplates?: (QsTemplate | null)[] | null;
  readonly QsENV?: QsENV | null;
  readonly qscredentialsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly qsProjectQsEnvId?: string | null;
  constructor(init: ModelInit<QsProject, QsProjectMetaData>);
  static copyOf(source: QsProject, mutator: (draft: MutableModel<QsProject, QsProjectMetaData>) => MutableModel<QsProject, QsProjectMetaData> | void): QsProject;
}

export declare class QsTemplate {
  readonly id: string;
  readonly name: string;
  readonly sourceAnid?: string | null;
  readonly qsprojectID: string;
  readonly QsAnalysis?: QsAnalysis | null;
  readonly QCDashboard?: QsDashboard | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly qsTemplateQsAnalysisId?: string | null;
  readonly qsTemplateQcDashboardId?: string | null;
  constructor(init: ModelInit<QsTemplate, QsTemplateMetaData>);
  static copyOf(source: QsTemplate, mutator: (draft: MutableModel<QsTemplate, QsTemplateMetaData>) => MutableModel<QsTemplate, QsTemplateMetaData> | void): QsTemplate;
}

export declare class QsAnalysis {
  readonly id: string;
  readonly name: string;
  readonly qcTemplateid?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<QsAnalysis, QsAnalysisMetaData>);
  static copyOf(source: QsAnalysis, mutator: (draft: MutableModel<QsAnalysis, QsAnalysisMetaData>) => MutableModel<QsAnalysis, QsAnalysisMetaData> | void): QsAnalysis;
}

export declare class QsDashboard {
  readonly id: string;
  readonly name?: string | null;
  readonly qcTemplateid?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<QsDashboard, QsDashboardMetaData>);
  static copyOf(source: QsDashboard, mutator: (draft: MutableModel<QsDashboard, QsDashboardMetaData>) => MutableModel<QsDashboard, QsDashboardMetaData> | void): QsDashboard;
}

export declare class TableauENV {
  readonly id: string;
  readonly name: string;
  readonly TProjectid: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TableauENV, TableauENVMetaData>);
  static copyOf(source: TableauENV, mutator: (draft: MutableModel<TableauENV, TableauENVMetaData>) => MutableModel<TableauENV, TableauENVMetaData> | void): TableauENV;
}

export declare class TableauCredentials {
  readonly id: string;
  readonly username: string;
  readonly password: string;
  readonly sitename: string;
  readonly TableauProjects?: (TableauProject | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TableauCredentials, TableauCredentialsMetaData>);
  static copyOf(source: TableauCredentials, mutator: (draft: MutableModel<TableauCredentials, TableauCredentialsMetaData>) => MutableModel<TableauCredentials, TableauCredentialsMetaData> | void): TableauCredentials;
}

export declare class TableauProject {
  readonly id: string;
  readonly Projectname: string;
  readonly Did?: string | null;
  readonly Department?: Department | null;
  readonly tableaucredentialsID: string;
  readonly TableauENV?: QsENV | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tableauProjectDepartmentId?: string | null;
  readonly tableauProjectTableauEnvId?: string | null;
  constructor(init: ModelInit<TableauProject, TableauProjectMetaData>);
  static copyOf(source: TableauProject, mutator: (draft: MutableModel<TableauProject, TableauProjectMetaData>) => MutableModel<TableauProject, TableauProjectMetaData> | void): TableauProject;
}

export declare class Department {
  readonly id: string;
  readonly Customerid: string;
  readonly Dname: string;
  readonly Customer?: Customer | null;
  readonly QuicksightProject?: QsProject | null;
  readonly BIMProject?: BIMProject | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly departmentCustomerId?: string | null;
  readonly departmentQuicksightProjectId?: string | null;
  readonly departmentBimProjectId?: string | null;
  constructor(init: ModelInit<Department, DepartmentMetaData>);
  static copyOf(source: Department, mutator: (draft: MutableModel<Department, DepartmentMetaData>) => MutableModel<Department, DepartmentMetaData> | void): Department;
}

export declare class Customer {
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Customer, CustomerMetaData>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer, CustomerMetaData>) => MutableModel<Customer, CustomerMetaData> | void): Customer;
}

export declare class TableauSheets {
  readonly id: string;
  readonly name?: string | null;
  readonly TWid?: string | null;
  readonly tableauworkbookID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TableauSheets, TableauSheetsMetaData>);
  static copyOf(source: TableauSheets, mutator: (draft: MutableModel<TableauSheets, TableauSheetsMetaData>) => MutableModel<TableauSheets, TableauSheetsMetaData> | void): TableauSheets;
}

export declare class TableauWorkbook {
  readonly id: string;
  readonly name: string;
  readonly Pid: string;
  readonly TableauProject?: TableauProject | null;
  readonly TableauSheets?: (TableauSheets | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly tableauWorkbookTableauProjectId?: string | null;
  constructor(init: ModelInit<TableauWorkbook, TableauWorkbookMetaData>);
  static copyOf(source: TableauWorkbook, mutator: (draft: MutableModel<TableauWorkbook, TableauWorkbookMetaData>) => MutableModel<TableauWorkbook, TableauWorkbookMetaData> | void): TableauWorkbook;
}