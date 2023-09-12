import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react'
import React from 'react'

const DeleteReviewModal = ({open, handleOpen, handelDeleteReview,review}) => {
  return (
    <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}>
        <DialogHeader>Delete!</DialogHeader>
        <DialogBody divider>Do you really want to delete the item?</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button
            className="bg-gray-900 text-white"
            onClick={() => handelDeleteReview(review._id)}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
  )
}

export default DeleteReviewModal