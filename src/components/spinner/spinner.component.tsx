import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import Theme from '../../theme';
const {
  colors: { secondary },
} = Theme;
interface SpinnerProps extends ActivityIndicatorProps {}

export default function Spinner({ ...props }: SpinnerProps) {
  return <ActivityIndicator color={secondary} {...props} />;
}
