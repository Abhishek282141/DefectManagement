export interface AddDefectRequest{
    title: string;
    defectDetails: string;
    stepsToReproduce: string;
    priority: number;
    reportedByTesterId: string;
    assignedToDeveloperId: string;
    severity: number;
    status: string;
    projectCode: number ;
}