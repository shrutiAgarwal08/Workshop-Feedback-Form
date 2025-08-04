package com.workshop.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.workshop.entity.Feedback;
import com.workshop.service.FeedbackService;
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/feedbacks")
public class FeedbackController {
	@Autowired
	private FeedbackService Service;
	@PostMapping
    public Feedback saveFeedback(@RequestBody Feedback feedback){
		return Service.savefeedback(feedback);                  }
	@GetMapping
	public List<Feedback> getAllFeedbacks(){
		return Service.getallfeedbacks();  }
	@DeleteMapping("/{id}")
	public void deleteFeedback(@PathVariable int id) {
		Service.deleteFeedbackById(id);
	}}