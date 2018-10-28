import ProtectedRoute from '../../../components/ProtectedRoute';
import { isAuthenticated } from '../../../services/auth/authService';
import { connect } from 'react-redux';

export default connect(state => ({
    isResolved: isAuthenticated(state.global.auth),
    redirectTo: '/login'
}))(ProtectedRoute);
