/// <reference types="react-jsonschema-form" />
/// <reference types="react" />
declare const MuiForm:
  | import('react').ComponentClass<
      import('react-jsonschema-form').FormProps<any>,
      any
    >
  | import('react').FunctionComponent<
      import('react-jsonschema-form').FormProps<any>
    >;
export default MuiForm;
