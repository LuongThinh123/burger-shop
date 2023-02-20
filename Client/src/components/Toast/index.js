import { useRef, memo } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleExclamation, faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons';

import { useToastContext } from '~/customHook';
import { deleteNotification } from '~/reducers/actions/toastAction';
import styles from './Toast.module.scss';

const cx = classNames.bind(styles);

function Toast({ position, timeAutoDelete }) {
  const [toastState, toastDispatch] = useToastContext();

  const toastRef = useRef();

  const generateIcon = (type) => {
    switch (type) {
      case 'SUCCESS':
        return <FontAwesomeIcon icon={faCircleCheck} />;
      case 'INFO':
        return <FontAwesomeIcon icon={faCircleInfo} />;
      case 'WARNING':
        return <FontAwesomeIcon icon={faCircleExclamation} />;
      case 'ERROR':
        return <FontAwesomeIcon icon={faCircleExclamation} />;
      default:
    }
  };

  const generateBackgroundColor = (type) => {
    switch (type) {
      case 'SUCCESS':
        return '#5cb85c';
      case 'INFO':
        return '#5bc0de';
      case 'WARNING':
        return '#f0ad4e';
      case 'ERROR':
        return '#d9534f';
      default:
    }
  };

  return (
    <div className={cx('notification-container', position)}>
      {toastState.map((notification, i) => {
        setTimeout(() => {
          // toastRef.current.remove();
          toastDispatch(deleteNotification(notification.id));
        }, timeAutoDelete || 1250);
        return (
          <div
            ref={toastRef}
            style={{ backgroundColor: generateBackgroundColor(notification.type) }}
            key={notification.id}
            className={cx('notification', 'toast', position)}
          >
            <FontAwesomeIcon
              className={cx('close-btn')}
              icon={faXmark}
              onClick={() => toastDispatch(deleteNotification(notification.id))}
            />
            <div className={cx('notification-image')}>{generateIcon(notification.type)}</div>
            <div className={cx('notification-infor')}>
              <p className={cx('notification-title')}>{notification.title}</p>
              <p className={cx('notification-message')}>{notification.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default memo(Toast);

// const [list, setList] = useState(toastList);

// useEffect(() => {
//   setList(toastList);
// }, [toastList, list]);
// // const deleteToast = useCallBack(
// //   (id) => {
// //     const toastListItem = toastList.filter((e) => e.id !== id);
// //     setList(toastListItem);
// //   },
// //   [toastList, setList],
// // );

// // useEffect(() => {
// //   const interval = setInterval(() => {
// //     if (toastList.length) {
// //       deleteToast(toastList[0].id);
// //     }
// //   }, 3000);

// //   return () => {
// //     clearInterval(interval);
// //   };
// // }, [toastList, deleteToast]);

// return (
//   <div className={cx('container', { position })}>
//     {list.map((toast, index) => (
//       <div
//         key={index}
//         className={cx('notification', 'toast', { position })}
//         style={{ backgroundColor: toast.backgroundColor }}
//       >
//         <button>X</button>
//         <div>
//           <p className={cx('title')}>{toast.title}</p>
//           <p className={cx('description')}>{toast.description}</p>
//         </div>
//       </div>
//     ))}
//   </div>
// );
