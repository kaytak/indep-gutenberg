import { Paper } from "@mui/material";
import {
    buildCollection,
    Entity,
    EntityCollectionView,
    useAuthController,
    useReferenceDialog,
    useSelectionController,
    useSideEntityController,
    useSnackbarController,
    useDataSource,
    FieldProps
} from "firecms";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Product } from "./App";
import MyEditorComponent from "./editor";
import { gbgState } from "./recoil";


export default function CustomColorTextField({
    property,
    value,
    setValue,
    customProps,
    touched,
    error,
    isSubmitting,
    context, // the rest of the entity values here
    ...props
}: FieldProps<string, any>) {


return (
    <Paper sx={{
        width: "800px",
        height: "600px",
        margin: "16px",
        boxShadow: "rgb(0 0 0 / 8%) 0px 8px 12px -4px"
    }}
           variant={"outlined"}>
            
            </Paper>
)}

export const articleCollection = buildCollection({
    path: "test_product",
    name: "Articles",
    permissions: ({ authController }) => ({
        edit: true,
        create: true,
        // we have created the roles object in the navigation builder
        delete: true
    }),
   /* views: [{
        path: "preview",
        name: "Preview",
        builder: (props) => <CustomColorTextField {...props}/>
    }],*/
    properties: {
        _DocId: {
            name: "_DocId",
            validation: { required: true },
            dataType: "string"
        },
        _author:{name: "_author", dataType: "string"},
        _branch:{name: "_branch", dataType: "string"},
        _content:{name: "_content", dataType: "string",
        Field: CustomColorTextField,},
        _created: {name: "_created",dataType: "number"},
        _editorVer:{name: "_editorVer",dataType: "number"},
        _lastUpdate:{name: "_lastUpdate",dataType: "number"},
        _licensed:{name: "_licensed", dataType: "string"},
        _repository:{name: "_repository", dataType: "string"},
        _tmp:{name: "_tmp", dataType: "string"},
        tags:{name: "_tmp", dataType: "array",
        of: {
            dataType: "string"
        }},
        title:{name: "title", dataType: "string"},
    }
});

export function GbCMSView() {
    const [gbg, setGbg] = useRecoilState(gbgState);
    const dataSource=useDataSource();
    const [uid,setUid]=useState("");
    const [entityData,setEntityData]=useState({});
    // hook to display custom snackbars
    const snackbarController = useSnackbarController();

    const selectionController = useSelectionController();
    const [switchMode,setSwitchMode]=useState(false);
    //var switchMode=false;
    console.log("Selection from ExampleCMSView", selectionController.selectedEntities);

    // hook to open the side dialog that shows the entity forms
    const sideEntityController = useSideEntityController();

    // hook to do operations related to authentication
    const authController = useAuthController();

    // hook to open a reference dialog
    const referenceDialog = useReferenceDialog({
        path: "products",
        onSingleEntitySelected(entity: Entity<Product> | null) {
            snackbarController.open({
                type: "success",
                message: "Selected " + entity?.values.name
            })
        }
    });


    useEffect(()=>{
        
    })
    const update1=()=>{
        console.log(gbg),
        dataSource.saveEntity({path:"test_product",entityId:uid,
        values:gbg,status:"existing",collection:articleCollection}).then(
            ()=>{console.log("saved in Firestore!")}
        )
    }
    const load1=()=>{
        console.log(uid)
        dataSource.fetchEntity({path:"test_product",entityId:uid,collection:articleCollection}).then(
            (r:any)=>{
              //  console.log(r)
                setEntityData(r.values);
                setGbg(r.values);
                setSwitchMode(true);
            }
        )
    }
    return (
        <div>
            <input onChange={(e)=>setUid(e.target.value)}></input><br/>
            <button onClick={load1}>load</button><br/>
            <button onClick={update1}>update</button>
            {switchMode ?
            
            <MyEditorComponent ></MyEditorComponent>
           :
           <EntityCollectionView {...articleCollection}
           fullPath={"/test_product"}
           selectionController={selectionController}/>
            }

        </div>

    )
}
