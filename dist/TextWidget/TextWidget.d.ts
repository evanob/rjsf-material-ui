/// <reference types="react" />
import { WidgetProps } from 'react-jsonschema-form';
declare const TextWidget: ({
  id,
  required,
  readonly,
  disabled,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
  formContext,
}: WidgetProps) => JSX.Element;
export default TextWidget;
