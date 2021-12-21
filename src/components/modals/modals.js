import EpsgValidationModal from './EpsgValidationModal/EpsgValidationModal';
import XsdValidationModal from './XsdValidationModal/XsdValidationModal';
import ErrorModal from './ErrorModal/ErrorModal';
import InvalidFileModal from './InvalidFileModal/InvalidFileModal';

const modals = {
   EPSG_VALIDATION: EpsgValidationModal,
   XSD_VALIDATION: XsdValidationModal,
   ERROR: ErrorModal,
   INVALID_FILE: InvalidFileModal
};

export default modals;