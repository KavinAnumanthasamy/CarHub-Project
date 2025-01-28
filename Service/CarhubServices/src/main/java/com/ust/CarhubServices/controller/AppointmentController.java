package com.ust.CarhubServices.controller;

import com.ust.CarhubServices.entity.Appointment;
import com.ust.CarhubServices.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/appointments")
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;



    @PostMapping
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        return appointmentService.createAppointment(appointment);
    }

    @GetMapping("/allbookings")
    public List<Appointment> getAllBookings() {
        return appointmentService.getAllAppointments();
    }
}
