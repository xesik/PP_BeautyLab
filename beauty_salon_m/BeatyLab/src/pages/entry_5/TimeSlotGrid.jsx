import BookedSlot from './BookedSlot';
import AvailableSlot from './AvailableSlot';

const TimeSlotGrid = ({ slots, onAdd, onEdit, onDelete }) => {
  return (
    <section className="flex flex-wrap gap-8 mt-28 w-full text-2xl text-center text-black max-w-[1488px] max-md:mt-10 max-md:max-w-full">
      {slots.map((slot, index) =>
        slot.isAvailable ? (
          <AvailableSlot key={index} time={slot.time} onAdd={onAdd} />
        ) : (
          <BookedSlot
            key={index}
            time={slot.time}
            name={slot.name}
            phone={slot.phone}
            onEdit={() => onEdit(slot)}
            onDelete={() => onDelete(slot.time)}
          />
        )
      )}
    </section>
  );
};


export default TimeSlotGrid;
